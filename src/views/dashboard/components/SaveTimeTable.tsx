import { Button, Modal, Spinner } from "flowbite-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/ClientSDK";
import { useState } from "react";

type CreateTimeTableTypes = {
  openModal: boolean;
  setOpenModal: Function;
  timetableData: any[];
};

const SaveTimeTable: React.FC<CreateTimeTableTypes> = ({
  openModal,
  setOpenModal,
  timetableData,
}) => {
  const [spin, setSpin] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  // Save timetable to Firestore
  const saveTimeTable = async () => {
    if (timetableData.length === 0) {
      alert("Please generate a Timetable first");
      return;
    }
    try {
      setSpin(true);
      await addDoc(collection(db, "generatedTimetables"), {
        createdAt: new Date().toISOString(),
        timetable: timetableData,
        title: title,
      });
      alert("Timetable Saved");
      setOpenModal(false);
    } catch (error) {
      // console.error("Error saving timetable:", error);
      alert((error as Error).message);
    } finally {
      setSpin(false);
    }
  };
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Create Time Table</Modal.Header>
      <Modal.Body>
        <form className="space-y-6">
          <div>
            <label htmlFor="title" className="block font-medium text-gray-900">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          <Button onClick={saveTimeTable}>
            {spin ? <Spinner light className=" fill-indigo-600" /> : "Create"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SaveTimeTable;
