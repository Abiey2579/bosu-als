import { Button } from "flowbite-react";
import { timeSlotsList, venuesList, coursesList } from "../../../util/common";

import { useState } from "react";
import SaveTimeTable from "./SaveTimeTable";

const GenerateTimeTable = () => {
  const [timetableData, setTimetableData] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);

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
        <Button
          color={"success"}
          onClick={() => {
            if (timetableData.length === 0) {
              alert("please generate timetable first");
              return;
            }
            setOpenModal(true);
          }}
          className="rounded"
        >
          <span>Save Timetable</span>
        </Button>
        <SaveTimeTable
          timetableData={timetableData}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
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
