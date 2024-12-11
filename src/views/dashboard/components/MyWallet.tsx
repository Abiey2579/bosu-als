import {
  ArrowDownOnSquareIcon,
  BanknotesIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { Button, Table } from "flowbite-react";

const MyWallet = () => {
  return (
    <div className="p-6 space-y-8 ">
      <h1 className="font-semibold text-2xl font-league-spartan">My Wallet</h1>

      {/*  */}
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-600">Total Balance</h4>
          <h1 className="text-6xl font-semibold font-Headings">
            16,002 <span className="text-base text-gray-600">USD</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-dominance enabled:hover:bg-dominance">
            <BanknotesIcon className="w-5 mr-4" />
            <span>Withraw</span>
          </Button>
          <Button className="bg-success enabled:hover:bg-success text-dominance">
            <BanknotesIcon className="w-5 mr-4" />
            <span>Sent Money</span>
          </Button>
          <Button color="light">
            <EllipsisHorizontalIcon className="w-5" />
          </Button>
        </div>
      </div>

      <hr />

      {/* TRANSACTION HISTORY */}
      <div className="">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold mb-2 text-xl">Transaction History</h4>
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

export default MyWallet;
