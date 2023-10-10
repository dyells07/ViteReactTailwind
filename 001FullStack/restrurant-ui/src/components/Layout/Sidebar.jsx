import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="./react.svg" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">
          Restro App
        </Typography>
      </div>
      <List>
        <Accordion open={open === 1} icon={<ChevronDownIcon className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}>
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <CubeTransparentIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Link to="/" className="text-blue-gray mr-auto font-normal">
                Dashboard
              </Link>
            </AccordionHeader>
          </ListItem>
  <AccordionBody className="py-1">
<List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to="/" className="text-blue-gray mr-auto font-normal">
                Manage Order
              </Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to="/" className="text-blue-gray mr-auto font-normal">
                View Sales
              </Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to="/" className="text-blue-gray mr-auto font-normal">
                Delete Order
              </Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 1} icon={<ChevronDownIcon className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}>
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Link to="/foodItem" className="text-blue-gray mr-auto font-normal">
                Fooditems
              </Link>
            </AccordionHeader>
          </ListItem>
  <AccordionBody className="py-1">
		<List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to="/foodItem" className="text-blue-gray mr-auto font-normal">
                List Of Foods
              </Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to="/addfoodItem" className="text-blue-gray mr-auto font-normal">
                Add FoodItem
              </Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>



        <Accordion open={open === 1} icon={<ChevronDownIcon className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}>
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Link to="/customer" className="text-blue-gray mr-auto font-normal">
                Customers
              </Link>
            </AccordionHeader>
          </ListItem>
  <AccordionBody className="py-1">
		<List className="p-0">
      
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to="/customer" className="text-blue-gray mr-auto font-normal">
                Customer List
              </Link>
              </ListItem>

              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to="/addcustomer" className="text-blue-gray mr-auto font-normal">
                Add New Customer
              </Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/settings" className="text-blue-gray">
            Settings
          </Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/logout" className="text-blue-gray">
            Log Out
          </Link>
        </ListItem>
      </List>
    </Card>
  );
}


