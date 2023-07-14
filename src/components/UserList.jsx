/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SingleUser from './SingleUser';

function UserList() {
  // 받은 props로 부스 참여자 초기화
  const [userList, setUserList] = useState(
    ['user1', 'user2', 'user3'].map((_, i) => ({
      content: _,
      id: `${i}${i}`,
      isHost: false,
    })),
  );

  // 유저의 드래그 이벤트가 끝날경우 배열 변경
  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const copyUserList = JSON.parse(JSON.stringify(userList));
    const [targetItem] = copyUserList.splice(source.index, 1);
    copyUserList.splice(destination.index, 0, targetItem);
    setUserList(copyUserList);
  };

  // requestAnimationFrame 초기화
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div className="max-w-sm p-2 border-solid rounded border-2">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {userList.map((item, idx) => (
                <Draggable key={item.id} draggableId={item.id} index={idx}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <SingleUser
                        userName={item.content}
                        isHost={item.isHost}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default UserList;
