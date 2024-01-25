import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Home/tabs.css";
import TabCard from "./TabCard";
const TabSection = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
    <div>
            <div className="md:flex overflow-auto items-center justify-center mt-9">
            <div>
                <Tabs className={"react-tabs__tab-list"} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab className={"react-tabs__tab"}>Individual/Akok Bima</Tab>
                        <Tab className={"react-tabs__tab"}>Islami Takaful</Tab>
                        <Tab className={"react-tabs__tab"}>Janabima</Tab>
                        <Tab className={"react-tabs__tab"}>Group Insurance</Tab>
                        <Tab className={"react-tabs__tab"}>NPDI</Tab>
                    </TabList>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </div>

        <TabCard/>
    </div>

        
    );
};

export default TabSection;