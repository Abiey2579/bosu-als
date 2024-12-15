import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/ClientSDK";
import { timeSlotsList } from "../../util/common";

const DownloadTimetable = () => {
  const [timetableData, setTimetableData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimetable = async () => {
      // Extract the document ID from the URL hash
      const documentId = window.location.hash.substring(1); // Remove the `#` symbol

      if (!documentId) {
        console.error("No document ID found in URL.");
        setLoading(false);
        return;
      }

      try {
        // Fetch the document from Firestore
        const docRef = doc(db, "generatedTimetables", documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTimetableData(docSnap.data());
        } else {
          console.error("No timetable found with the provided ID.");
        }
      } catch (error) {
        console.error("Error fetching timetable:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTimetable();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const renderTimetable = () => {
    return timetableData.timetable.map((day: any) => (
      <tbody key={day.day}>
        {/* Day Header */}
        <tr className="day-header">
          <td colSpan={timeSlotsList.length + 1}>{day.day}</td>
        </tr>
        {/* Time Slot Header */}
        <tr className="time-venue-header">
          <td>Venue</td>
          {timeSlotsList.map((slot) => (
            <td key={slot}>{slot}</td>
          ))}
        </tr>
        {/* Venue Rows */}
        {day.slots.map((slot: any) => (
          <tr key={slot.venue}>
            <td>{slot.venue}</td>
            {slot.times.map((time: any) => (
              <td key={time.time}>{time.course}</td>
            ))}
          </tr>
        ))}
      </tbody>
    ));
  };
  return (
    <div className="px-4 py-6 space-y-4">
      {loading ? (
        <p>Loading timetable...</p>
      ) : timetableData ? (
        <>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-2xl">Timetable Details</h1>
            <button
              onClick={handlePrint}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Print Timetable
            </button>
          </div>
          <div id="timetable-content">
            <section id="timetable">
              <table>
                {timetableData.timetable.length > 0 ? (
                  renderTimetable()
                ) : (
                  <tbody>
                    <tr>
                      <td colSpan={timeSlotsList.length + 1}>
                        No timetable generated yet
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </section>
          </div>
        </>
      ) : (
        <p>No timetable found for the provided ID.</p>
      )}
    </div>
  );
};

export default DownloadTimetable;
