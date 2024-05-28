import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, CompleteTask, ReopenTask, editTask } from './TodoSlice';

const App = () => {
  const myTask = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();
  const [txtval, setTxtval] = useState("");
  const [editId, setEditId] = useState(null);

  const addData = () => {
    if (editId !== null) {
      dispatch(editTask({ id: editId, work: txtval }));
      setEditId(null);
    } else {
      dispatch(addTask({ id: Date.now(), work: txtval, status: true }));
    }
    setTxtval("");
  };

  const taskDelete = (id) => {
    dispatch(deleteTask({ id }));
  };

  const taskComplete = (id) => {
    dispatch(CompleteTask({ id }));
  };

  const taskReopen = (id) => {
    dispatch(ReopenTask({ id }));
  };

  const editTaskData = (id, work) => {
    setEditId(id);
    setTxtval(work);
  };

  return (
    <>
      <center>
        <h1>Hello</h1>
        Enter Your Task: <input type="text" value={txtval} onChange={(e) => setTxtval(e.target.value)} />
        <button onClick={addData}>{editId !== null ? 'Update' : 'Add'}</button>
        <hr />
        <table width={400} bgcolor='pink'>
          <thead>
            <tr bgcolor='yellow'>
              <th>Sno.</th>
              <th>Task</th>
              <th>functions
                
              </th>
            </tr>
          </thead>
          <tbody>
            {myTask.map((key, index) => (
              <tr key={key.id}>
                <td>{index + 1}</td>
                <td>{key.status ? key.work : <span style={{ color: "red", textDecoration: "line-through" }}>{key.work}</span>}</td>
                <td>
                  <button onClick={() => taskDelete(key.id)}>Delete</button>
                  <button onClick={() => taskComplete(key.id)}>Complete</button>
                  <button onClick={() => taskReopen(key.id)}>Reopen</button>
                  <button onClick={() => editTaskData(key.id, key.work)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
};

export default App;
