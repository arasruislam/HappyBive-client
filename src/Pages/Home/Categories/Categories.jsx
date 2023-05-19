import { FaCaretDown } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Categories = () => {

  return (
    <>
      <Tabs>
        <TabList className="border-none text-center space-x-8">
          <Tab className="active-tab">
            All <FaCaretDown />
          </Tab>
          <Tab className="default-tab">Science Tab</Tab>
          <Tab className="default-tab">Engineering Kits</Tab>
          <Tab className="default-tab">Engineering Tools</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Categories;
