import { useContext } from 'react';
import { closestCorners, DndContext, useSensors, useSensor, PointerSensor } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import PromptComponentsList from './PromptComponentsList';
import PromptsContext from "../../../../store/prompt-components-store.jsx";

export default function PromptComponents() {
    const { brokenPrompt, setBrokenPrompt, setSelectedCards } = useContext(PromptsContext);

    function handleDragEnd(e) {
        const { active, over } = e;
        if (active.id === over.id) return; 

        const originPosition = brokenPrompt.findIndex(component => component.id === active.id);
        const newPosition = brokenPrompt.findIndex(component => component.id === over.id);

        const updatedComponents = arrayMove(brokenPrompt, originPosition, newPosition);
        setBrokenPrompt(updatedComponents);
    }

    function deleteComponent(id) {
        setBrokenPrompt((prevComponents) => {
            const updatedComponents = prevComponents.filter(component => component.id !== id);
            const deletedComponent = prevComponents.find(component => component.id === id);
    
            if (deletedComponent) {
                setSelectedCards((prevSelectedCards) => {
                    return prevSelectedCards.filter(card => card.id !== deletedComponent.id);
                });
            }
    
            return updatedComponents;
        });
    }

    function onWeightChange(cardId, newWeight) {
        setBrokenPrompt(prev => prev.map(item => {
            if (item.id === cardId) {
                return { ...item, weight: newWeight };
            }
            return item;
        }));
    
        setSelectedCards(prev => prev.map(card => {
            if (card.id === cardId) {
                return { ...card, weight: newWeight };
            }
            return card;
        }));
    }
    
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 3 } 
        })
    );

    return (
        <div>
            <DndContext 
                collisionDetection={closestCorners} 
                onDragEnd={handleDragEnd} 
                sensors={sensors}
            >
                <PromptComponentsList items={brokenPrompt} deleteComponent={deleteComponent} onWeightChange={onWeightChange}/>
            </DndContext>
        </div>
    );
}

