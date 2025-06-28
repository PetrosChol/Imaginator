import { useState, useContext } from "react";
import TabButton from "./TabButton";
import TabContentButton from "./TabContentButton";
import FlippedCard from "./FlippedCard";
import { TABS_DATA } from "./Data/TabsData"
import PromptsContext from "../../../../store/prompt-components-store";

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState("painting");
  const [selectedSubTab, setSelectedSubTab] = useState(Object.keys(TABS_DATA["painting"])[0]);
  const { selectedCards, setSelectedCards, setBrokenPrompt } = useContext(PromptsContext);


  function handleSelectedCardsTabSelection() {
    setSelectedTab("selected-cards")
  }

  function handleTabSelection(tab) {
    setSelectedTab(tab);
    setSelectedSubTab(Object.keys(TABS_DATA[tab])[0]); 
  }

  function handleSubTabSelection(subTab) {
    setSelectedSubTab(subTab);
  }

  function handleCardClick(card) {
    setSelectedCards((prevSelectedCards) => {
      const isSelected = prevSelectedCards.some(item => item.id === card.id);

      if (isSelected) {
        setBrokenPrompt((prevBrokenPrompt) => prevBrokenPrompt.filter(item => item.id !== card.id));
        return prevSelectedCards.filter(item => item.id !== card.id);
      } else {
        const newComponent = { 
          id: card.id, 
          name: card.name,
          details: card.details,
          weight: 1
        };
        setBrokenPrompt((prevBrokenPrompt) => [...prevBrokenPrompt, newComponent]);
        return [...prevSelectedCards, card];
      }
    });
  }

  function handleWeightChange(cardId, newWeight) {
    setBrokenPrompt(prev => prev.map(item => 
      item.id === cardId ? {...item, weight: newWeight} : item
    ));

    setSelectedCards(prev => prev.map(card => 
      card.id === cardId ? {...card, weight: newWeight} : card
    ));
  }

  function handleCardDetailsChange(cardId, newDetails) {
    setBrokenPrompt(prev => prev.map(item => 
      item.id === cardId ? {...item, details: newDetails} : item
    ));

    setSelectedCards(prev => prev.map(card => 
      card.id === cardId ? {...card, details: newDetails} : card
    ));
  }


  return (
    <div className="p-4">
      {/* Main Tabs */}
      <div className="flex mt-2 gap-2 text-sm flex-nowrap sm:flex-wrap overflow-hidden select-none">
        <TabButton key="selected-cards" isSelected={selectedTab === "selected-cards"} onClick={handleSelectedCardsTabSelection}>
          Selected Cards ({selectedCards.length})
        </TabButton>
        {Object.keys(TABS_DATA).map((tab) => (
          <TabButton
            key={tab}
            isSelected={selectedTab === tab}
            onClick={() => handleTabSelection(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabButton>
        ))}
      </div>

      {/* Subtabs */}
      <div className="border-gray-600 flex mt-4 gap-2 text-sm flex-nowrap sm:flex-wrap overflow-hidden select-none">
        {selectedTab !== "selected-cards" && Object.keys(TABS_DATA[selectedTab]).map((subTab) => (
          <TabContentButton
            key={subTab}
            subTab={TABS_DATA[selectedTab][subTab].title}
            icon={TABS_DATA[selectedTab][subTab].icon}
            isSelected={selectedSubTab === subTab}
            onClick={() => handleSubTabSelection(subTab)}
          />
        ))}
      </div>

      {selectedTab === "selected-cards" && (
        selectedCards.length > 0 ? (
          <div className="lg:max-h-[900px] overflow-y-auto mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 pr-5">
            {selectedCards.map((card) => (
            <FlippedCard
              key={card.id}
              cardInfo={card}
              isSelected={true}
              onClick={() => handleCardClick(card)}
              onWeightChange={handleWeightChange}
              onDetailsChange={(newDetails) => handleCardDetailsChange(card.id, newDetails)}
              showEditControls={selectedTab === "selected-cards"}  
            />
          ))}
          </div>
        ) : (
          <div className="text-gray-500">No Cards selected yet...</div>
        )
      )}

      {/* Cards for selected subtab if not 'selected-cards' */}
      {selectedTab !== "selected-cards" && (
        <div className="lg:max-h-[900px] overflow-y-auto mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 pr-5">
          {TABS_DATA[selectedTab][selectedSubTab].cards.map((card) => (
            <FlippedCard 
              key={card.id}  
              cardInfo={{...card, weight: selectedCards.find(c => c.id === card.id)?.weight ?? 1}} 
              isSelected={selectedCards.some(item => item.id === card.id)} 
              onClick={() => handleCardClick(card)}
              onWeightChange={handleWeightChange}
              onDetailsChange={(newDetails) => handleCardDetailsChange(card.id, newDetails)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
