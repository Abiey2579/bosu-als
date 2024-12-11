import { PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  Table,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

type AddTeamMemberProps = {
  OpenModal: boolean;
  SetOpenModal: Function;
};

const AddTeamMember: React.FC<AddTeamMemberProps> = ({
  OpenModal,
  SetOpenModal,
}) => {
  return (
    <Modal
      show={OpenModal}
      onClose={() => {
        SetOpenModal(false);
      }}
      dismissible
      size="lg"
    >
      <Modal.Body className="space-y-8">
        <div className="space-y-2">
          <span className="text-gray-600 text-sm block">Team Member</span>
          <h1 className="font-semibold text-3xl font-league-spartan border-b-2">
            New Team Member
          </h1>
        </div>
        <div className="space-y-4">
          <div>
            <Label className="text-gray-600 text-sm block">Full Name</Label>
            <TextInput type="text" sizing="lg" />
          </div>
          <div>
            <Label className="text-gray-600 text-sm block">Email Address</Label>
            <TextInput type="email" sizing="lg" />
          </div>
          <div>
            <Label className="text-gray-600 text-sm block">Role</Label>
            <Select sizing="lg">
              <option value="">asdfasd</option>
            </Select>
          </div>
          <Button
            onClick={() => SetOpenModal(false)}
            size="lg"
            className="bg-dominance enabled:hover:bg-dominance"
          >
            Add Member
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const MyTeam = () => {
  const [OpenModal, setOpenModal] = useState<boolean>(false);
  const [SelectAll, setSelectAll] = useState<boolean>(false);
  return (
    <div className="px-6 pb-4 pt-8 space-y-4 flex-1">
      <div className="flex justify-between items-center gap-4">
        <h1 className="font-semibold text-2xl font-league-spartan">My Team</h1>
        <AddTeamMember OpenModal={OpenModal} SetOpenModal={setOpenModal} />
        <Button
          onClick={() => setOpenModal(true)}
          className="bg-dominance enabled:hover:bg-dominance"
        >
          <PlusCircleIcon className="w-5 mr-4" />
          <span>Add Team Member</span>
        </Button>
      </div>
      <div className="overflow-hidden border rounded-lg">
        <Table striped hoverable>
          <Table.Head className="text-base text-dominance">
            <Table.HeadCell>
              <Checkbox
                onChange={(e) => setSelectAll(e.target.checked)}
                className="enabled:checked:bg-dominance"
              />
            </Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="text-gray-600">
            {[1, 2, 3, 4, 5, 6].map((e) => (
              <Table.Row key={e}>
                <Table.Cell>
                  <Checkbox
                    checked={SelectAll}
                    className="enabled:checked:bg-dominance"
                  />
                </Table.Cell>
                <Table.Cell>Yahaya Muhammad Bello</Table.Cell>
                <Table.Cell>mbya****79@gmail.com</Table.Cell>
                <Table.Cell>Editor</Table.Cell>
                <Table.Cell className="flex gap-2 items-center">
                  <Button size="xs" className="rounded-md" color="light">
                    Edit
                  </Button>
                  <Button size="xs" className="rounded-md" color="failure">
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default MyTeam;
