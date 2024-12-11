import {
  ArrowDownOnSquareIcon,
  ArrowPathRoundedSquareIcon,
  BuildingLibraryIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Badge, Button, Table } from "flowbite-react";

import VISA from "../../../assets/images/VISA.png";
import MASTER_CARD from "../../../assets/images/MASTER-CARD.png";

const Subscriptions = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="font-semibold text-2xl font-league-spartan">
        Subscriptions
      </h1>

      {/* CURRENT PLAN */}
      <div className="grid grid-cols-3 items-start gap-12">
        <div>
          <h4 className="font-semibold mb-2 text-xl">Current Plan</h4>
          <span className="block mb-8 text-gray-600">
            You can update your plan anytime for best benefit from the product
            and track your project
          </span>
          <Button className="w-fit bg-dominance text-peace enabled:hover:bg-dominance">
            <ArrowPathRoundedSquareIcon className="w-5 mr-4" />
            <span>Upgrade Plan</span>
          </Button>
        </div>
        <div className="bg-shade space-x-4 flex-1 flex items-start p-4 border rounded-xl w-full col-span-2">
          <BuildingLibraryIcon className="w-6" />
          <div className="flex-1">
            <div className="flex gap-4 items-center justify-between pb-2">
              <div className="space-x-4 font-semibold flex items-center">
                <span className="">Basic Plan</span>
                <Badge className="text-success bg-dominance text-sm">
                  $7/Month
                </Badge>
              </div>
              <CheckBadgeIcon className="w-5 float-right " />
            </div>
            <span className="text-gray-600">
              Includes up to 20 users, 10GB individual cloud storage and access
              minimal features
            </span>
          </div>
        </div>
      </div>

      <hr />

      {/* PAYMENT DETAILS */}
      <div className="grid grid-cols-3 items-start gap-12">
        <div>
          <h4 className="font-semibold mb-2 text-xl">Payment Details</h4>
          <span className="block mb-8 text-gray-600">
            Select Default Payment method or switch card details
          </span>
          <Button className="w-fit bg-dominance text-peace enabled:hover:bg-dominance">
            <Cog8ToothIcon className="w-5 mr-4" />
            <span>Manage Details</span>
          </Button>
        </div>
        <div className="space-y-4 col-span-2">
          <div className="bg-shade space-x-4 flex items-start p-4 border rounded-xl">
            <img src={VISA} alt="VISA LOGO" className="w-16" />
            <div className="flex-1">
              <div className="flex gap-4 items-center justify-between pb-2">
                <div className="space-x-4 font-semibold flex items-center">
                  <span className="">VISA Card</span>
                  <hr className="rotate-180 block" />
                </div>
                <CheckBadgeIcon className="w-5 float-right " />
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                  <Badge className="w-fit bg-dominance text-peace">
                    Holder Name
                  </Badge>
                  <span>Marques Brownlee</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Badge className="w-fit bg-dominance text-peace">
                    Card No.
                  </Badge>
                  <span>5129 **** **** 2127</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Badge className="w-fit bg-dominance text-peace">Exp.</Badge>
                  <span>11/25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-shade space-x-4 flex items-start p-4 border rounded-xl">
            <img src={MASTER_CARD} alt="MASTER CARD LOGO" className="w-16" />
            <div className="flex-1">
              <div className="flex gap-4 items-center justify-between pb-2">
                <div className="space-x-4 font-semibold flex items-center">
                  <span className="">MASTER Card</span>
                  <hr className="rotate-180 block" />
                </div>
                <CheckBadgeIcon className="w-5 float-right " />
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                  <Badge className="w-fit bg-dominance text-peace">
                    Holder Name
                  </Badge>
                  <span>Marques Brownlee</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Badge className="w-fit bg-dominance text-peace">
                    Card No.
                  </Badge>
                  <span>5129 **** **** 2127</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Badge className="w-fit bg-dominance text-peace">Exp.</Badge>
                  <span>11/25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* BILLING HISTORY */}
      <div className="">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold mb-2 text-xl">Billing History</h4>
            <span className="block mb-8 text-gray-600">
              Summary on the payment history for the Subscription plans.
            </span>
          </div>
          <Button className="w-fit bg-dominance text-peace enabled:hover:bg-dominance">
            <ArrowDownOnSquareIcon className="w-5 mr-4" />
            <span>Download History</span>
          </Button>
        </div>

        <div className="overflow-hidden border rounded-lg">
          <Table striped hoverable>
            <Table.Head className="text-base text-dominance">
              <Table.HeadCell className="bg-shade">Invoice</Table.HeadCell>
              <Table.HeadCell className="bg-shade">Amount</Table.HeadCell>
              <Table.HeadCell className="bg-shade">Card No.</Table.HeadCell>
              <Table.HeadCell className="bg-shade">Date</Table.HeadCell>
              <Table.HeadCell className="bg-shade">Status</Table.HeadCell>
              <Table.HeadCell className="bg-shade"></Table.HeadCell>
            </Table.Head>
            <Table.Body className="text-gray-600">
              {[1, 2, 3, 4, 5, 6].map((e) => (
                <Table.Row key={e}>
                  <Table.Cell className="text-dominance">Basic Plan</Table.Cell>
                  <Table.Cell className="text-dominance">$300</Table.Cell>
                  <Table.Cell className="text-dominance">
                    5129 **** **** 2127
                  </Table.Cell>
                  <Table.Cell>March 23, 2024</Table.Cell>
                  <Table.Cell>
                    <div className="flex gap-2 items-center">
                      <div className="w-2 h-2 rounded-full block bg-success" />
                      <span className="text-dominance">Paid</span>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="flex gap-2 items-center">
                    <Button size="xs" color="light">
                      <ArrowDownOnSquareIcon className="w-4 mr-4" />
                      <span>Download Invoice</span>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
