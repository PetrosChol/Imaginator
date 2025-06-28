import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Component from './Component';

const PromptComponentsList = ({ items, deleteComponent, onWeightChange }) => {
  return (
    <ul>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((item) => (
                <Component key={item.id} id={item.id} cardName={item.name} cardWeight={item.weight} deleteComponent={deleteComponent} onWeightChange={onWeightChange}/>
            ))}
        </SortableContext>
    </ul>
  );
};

export default PromptComponentsList;
