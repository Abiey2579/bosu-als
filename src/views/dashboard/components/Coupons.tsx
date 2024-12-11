import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import {
  Badge,
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  Table,
  TextInput,
  Tooltip,
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
          <span className="text-gray-600 text-sm block">Coupon</span>
          <h1 className="font-semibold text-3xl font-league-spartan border-b-2">
            Create New Coupon
          </h1>
        </div>
        <div className="space-y-4">
          <div>
            <Label className="text-gray-600 text-sm block">Coupon ID</Label>
            <TextInput type="text" sizing="lg" className="uppercase" />
          </div>
          <div>
            <Label className="text-gray-600 text-sm block">
              Discount Percentage (%)
            </Label>
            <TextInput type="number" sizing="lg" value={25} />
          </div>
          <div>
            <Label className="text-gray-600 text-sm block">
              Apply Coupon to
            </Label>
            <Select sizing="lg">
              <option value="">All My Courses</option>
            </Select>
          </div>
          <Button
            onClick={() => SetOpenModal(false)}
            size="lg"
            className="bg-dominance enabled:hover:bg-dominance"
          >
            Create Coupon
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const Coupons = () => {
  const [OpenModal, setOpenModal] = useState<boolean>(false);
  const [SelectAll, setSelectAll] = useState<boolean>(false);
  return (
    <div className="px-6 pb-4 pt-8 space-y-4 flex-1">
      <div className="flex justify-between items-center gap-4">
        <h1 className="font-semibold text-2xl font-league-spartan">
          Manage Coupons
        </h1>
        <AddTeamMember OpenModal={OpenModal} SetOpenModal={setOpenModal} />
        <Button
          onClick={() => setOpenModal(true)}
          className="bg-dominance enabled:hover:bg-dominance"
        >
          <PlusCircleIcon className="w-5 mr-4" />
          <span>Create Coupon</span>
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
            <Table.HeadCell>Coupon ID</Table.HeadCell>
            <Table.HeadCell>Discount Pacentage (%)</Table.HeadCell>
            <Table.HeadCell className="flex items-center">
              <span>Courses</span>
              <Tooltip
                content="This is the courses associated with the Coupon"
                className="capitalize"
              >
                <QuestionMarkCircleIcon className="w-4 ml-2" />
              </Tooltip>
            </Table.HeadCell>
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
                <Table.Cell>
                  <Badge className="w-fit bg-success text-dominance">
                    25% OFF
                  </Badge>
                </Table.Cell>
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

export default Coupons;
