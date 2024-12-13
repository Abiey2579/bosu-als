import { Button, Modal } from "flowbite-react";

type CreateTimeTableTypes = {
  openModal: boolean;
  setOpenModal: Function;
};

const SaveTimeTable: React.FC<CreateTimeTableTypes> = ({
  openModal,
  setOpenModal,
}) => {
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
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          <Button onClick={() => setOpenModal(false)}>Create </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SaveTimeTable;
