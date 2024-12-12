import { Button } from "flowbite-react";
import { timeSlotsList, venuesList, coursesList } from "../../../util/common";

const GenerateTimeTable = () => {
  // Generate a randomized weekly timetable
  function generateWeeklyTimetable(): void {
    const tableBody = document.getElementById(
      "table-body"
    ) as HTMLElement | null;

    if (!tableBody) {
      console.error("Table body element not found.");
      return;
    }

    tableBody.innerHTML = ""; // Clear previous data

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

    days.forEach((day) => {
      // Insert a header row for each day
      const dayRow = document.createElement("tr");
      const dayCell = document.createElement("td");
      dayCell.colSpan = timeSlots.length + 1;
      dayCell.classList.add("day-header");
      dayCell.textContent = day;
      dayRow.appendChild(dayCell);
      tableBody.appendChild(dayRow);

      // Insert table headers for each day
      const headersRow = `
  <tr class="time-venue-header">
    <td>Venue</td>
    ${timeSlots.map((slot) => `<td>${slot}</td>`).join("")}
  </tr>`;
      tableBody.innerHTML += headersRow;

      // Loop over each venue and create rows
      venues.forEach((venue) => {
        const row = document.createElement("tr");
        const venueCell = document.createElement("td");
        venueCell.textContent = venue;
        row.appendChild(venueCell);

        // Randomize course assignments for each time slot
        timeSlots.forEach((time) => {
          const cell = document.createElement("td");

          if (time === "1 - 2 pm") {
            // Mid-day break for all venues
            cell.classList.add("break");
            cell.textContent = "Break";
          } else {
            // Randomly decide if the cell will be free or have a course
            const isFreeTime = Math.random() < 0.3; // 30% chance of being a free period
            let randomCourse: string | null = null;

            if (!isFreeTime) {
              if (
                (Math.random() < 0.1 && day === "Monday") ||
                day === "Thursday"
              ) {
                // Higher probability for MTH and ENG to appear twice a week
                randomCourse = ["MTH 420", "ENG 400"][
                  Math.floor(Math.random() * 2)
                ];
              } else {
                // Other courses randomly assigned
                randomCourse =
                  courses[Math.floor(Math.random() * courses.length)];
              }
            }

            cell.textContent = randomCourse || ""; // Assign the course or empty if free time
          }

          row.appendChild(cell);
        });

        tableBody.appendChild(row);
      });
    });
  }

  return (
    <div className="px-4 py-6 space-y-4">
      <div className="flex gap-4 items-center justify-between">
        <Button
          color={"dark"}
          onClick={generateWeeklyTimetable}
          className="rounded-none"
        >
          <span>Generate Time Table</span>
        </Button>
        <Button
          color={"dark"}
          onClick={generateWeeklyTimetable}
          className="rounded-none"
        >
          <span>Print Time Table</span>
        </Button>
      </div>
      <section id="timetable">
        <table>
          <tbody id="table-body">
            {/* <!-- Rows for each venue will be generated here --> */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default GenerateTimeTable;
