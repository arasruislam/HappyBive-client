import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";
import AllSubCategoriesData from "./AllSubCategoriesData";

const Categories = () => {
  const [allSubCategoriesData, setAllSubCategoriesData] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [categoryName, setCategoryName] = useState(null);

  /* Load All Categories Data */
  useEffect(() => {
    fetch("http://localhost:5000/subCategories")
      .then((res) => res.json())
      .then((data) => {
        setAllSubCategoriesData(data);
      });
  }, []);

  /* Specific Data Load By Category */
  const url = `http://localhost:5000/subCategories?category=${categoryName}`;

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
        <TabList className="border-none text-center flex justify-center flex-wrap gap-4 mb-8">
          <Tab className="active-tab">
            All <FaCaretDown />
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

        {/* All Sub Categories Card */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
            {allSubCategoriesData.map((categories) => (
              <AllSubCategoriesData
                key={categories._id}
                categories={categories}
              />
            ))}
          </div>
        </TabPanel>

        {/* ScienceTab */}
        <TabPanel>
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {subCategories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </TabPanel>

        {/* Engineering Kits */}
        <TabPanel>
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {subCategories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </TabPanel>

        {/* Engineering Tools */}
        <TabPanel>
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
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
