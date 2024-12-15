import { useEffect, useState } from "react";
import { Button, Table } from "flowbite-react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../config/ClientSDK";
import { URIPaths } from "../../../util/URIPaths";

const Logs = () => {
  const [logs, setLogs] = useState<any[]>([]);

  // Fetch timetable logs from Firestore
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "generatedTimetables")
        );
        const fetchedLogs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLogs(fetchedLogs);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, []);

  // Delete a timetable
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "generatedTimetables", id));
      setLogs((prevLogs) => prevLogs.filter((log) => log.id !== id)); // Update UI after deletion
      console.log(`Timetable with ID ${id} deleted.`);
    } catch (error) {
      console.error("Error deleting timetable:", error);
    }
  };

  return (
    <div className="px-4 py-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Schedule Logs</h1>
      </div>

      {/* Table to display timetable logs */}
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell className="text-black bg-white">
              Title
            </Table.HeadCell>
            <Table.HeadCell className="text-black bg-white">
              Document ID
            </Table.HeadCell>
            <Table.HeadCell className="text-black bg-white">
              Created At
            </Table.HeadCell>
            <Table.HeadCell className="text-black bg-white">
              Actions
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {logs.length > 0 ? (
              logs.map((log) => (
                <Table.Row
                  key={log.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {log.title}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {log.id}
                  </Table.Cell>
                  <Table.Cell>
                    {new Date(log.createdAt).toLocaleString()}
                  </Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <Button
                      href={`${URIPaths.DownloadTimetable}#${log.id}`}
                      target="_blank"
                      size="xs"
                    >
                      Download
                    </Button>
                    <Button
                      size="xs"
                      color="failure"
                      onClick={() => handleDelete(log.id)}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={3} className="text-center text-gray-500">
                  No logs found.
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Logs;
