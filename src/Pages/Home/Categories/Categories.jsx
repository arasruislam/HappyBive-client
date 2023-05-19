import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [categoryName, setCategoryName] = useState(null);

  /* Load All Categories Data */
  //   useEffect(() => {
  //     fetch("https://happybive-server.vercel.app/subCategories")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCategories(data);
  //       });
  //   }, []);
  //   console.log(categories);

  /* Specific Data Load By Category */
  const url = `https://happybive-server.vercel.app/subCategories?category=${categoryName}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, [url]);

  /* Sub Categories Handler */
  const scienceTabHandler = (e) => {
    const scienceTab = e.target.innerText;
    setCategoryName(scienceTab);
  };
  const EngineeringKitsHandler = (e) => {
    const EngineeringKits = e.target.innerText;
    setCategoryName(EngineeringKits);
  };
  const EngineeringToolsHandler = (e) => {
    const EngineeringTools = e.target.innerText;
    setCategoryName(EngineeringTools);
  };

  return (
    <>
      <Tabs>
        <TabList className="border-none text-center space-x-8 mb-8">
          <Tab className="active-tab">
            All Toys <FaCaretDown />
          </Tab>
          <Tab
            onClick={scienceTabHandler}
            className="default-tab"
            name="ScienceTab"
          >
            ScienceTab
          </Tab>
          <Tab
            onClick={EngineeringKitsHandler}
            name="EngineeringKits"
            className="default-tab"
          >
            EngineeringKits
          </Tab>
          <Tab
            onClick={EngineeringToolsHandler}
            className="default-tab"
            name="EngineeringTools"
          >
            EngineeringTools
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {subCategories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-4">
            {subCategories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-4">
            {subCategories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Categories;
