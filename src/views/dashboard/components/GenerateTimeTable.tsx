import { Button, Spinner } from "flowbite-react";
import { timeSlotsList, venuesList, coursesList } from "../../../util/common";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/ClientSDK";
import { useState } from "react";

const GenerateTimeTable = () => {
  const [timetableData, setTimetableData] = useState<any[]>([]);
  const [spin, setSpin] = useState<boolean>(false);

  // Generate a randomized weekly timetable
  function generateWeeklyTimetable(): void {
    const days: string[] = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];
    const timeSlots: string[] = timeSlotsList;
    const venues: string[] = venuesList;
    const courses: string[] = coursesList;

    const newTimetable: any[] = days.map((day) => {
      const dayData = {
        day,
        slots: venues.map((venue) => {
          const times = timeSlots.map((time) => {
            let cellData: string | null = null;

            if (time === "1 - 2 pm") {
              cellData = "Break"; // Mid-day break for all venues
            } else {
              const isFreeTime = Math.random() < 0.3; // 30% chance of being a free period
              if (!isFreeTime) {
                if (
                  (Math.random() < 0.1 && day === "Monday") ||
                  day === "Thursday"
                ) {
                  cellData = ["MTH 420", "ENG 400"][
                    Math.floor(Math.random() * 2)
                  ];
                } else {
                  cellData =
                    courses[Math.floor(Math.random() * courses.length)];
                }
              }
            }

            return { time, course: cellData || "Free" };
          });

          return { venue, times };
        }),
      };

      return dayData;
    });

    setTimetableData(newTimetable);
  }

  // Save timetable to Firestore
  const saveTimeTable = async () => {
    try {
      setSpin(true);
      await addDoc(collection(db, "generatedTimetables"), {
        createdAt: new Date().toISOString(),
        timetable: timetableData,
      });
      alert("Timetable Saved");
    } catch (error) {
      // console.error("Error saving timetable:", error);
      alert((error as Error).message);
    } finally {
      setSpin(false);
    }
  };

  // Render the timetable
  const renderTimetable = () => {
    return timetableData.map((day) => (
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
      <div className="flex gap-4 items-center justify-between">
        <Button
          color={"dark"}
          onClick={generateWeeklyTimetable}
          className="rounded"
        >
          <span>Generate Timetable</span>
        </Button>
        <Button color={"success"} onClick={saveTimeTable} className="rounded">
          {spin ? (
            <>
              <Spinner light className=" fill-green-600" />
              <span className="ml-2">Saving...</span>
            </>
          ) : (
            <span>Save Timetable</span>
          )}
        </Button>
      </div>
      <section id="timetable">
        <table>
          {timetableData.length > 0 ? (
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
  );
};

export default GenerateTimeTable;
