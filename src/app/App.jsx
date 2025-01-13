import React from 'react';
import { getParentAttr, copyArr } from './commonFunc.js'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        };
    }

    render() {
        const onSubmitHandler = (e) => {
            e.preventDefault();

            const newArr = copyArr(this.state.tasks);
            const lastChildId = newArr[newArr.length - 1];

            const todoWrapper = e.target
            const title = todoWrapper.querySelector('[data-todo-title]').value;
            const description = todoWrapper.querySelector('[data-todo-description]').value;

            newArr.push({
                id: lastChildId ? lastChildId.id + 1 : 1,
                title: title,
                description: description,
                isTaskFinished: false,
            });

            this.setState({tasks: newArr});

            return todoWrapper.reset()
        }

        const onChangeStatusHandler = ({ target }) => {
            const id = getParentAttr(target, '.card', 'data-todo-item-id');

            const newArr = copyArr(this.state.tasks);

            const currentItem = newArr[id - 1];
            currentItem.isTaskFinished = !currentItem.isTaskFinished;

            return this.setState({tasks: newArr});
        }

        const onDeleteItemHandler = ({ target }) => {
            const id = Number(getParentAttr(target, '.card', 'data-todo-item-id'));
            const currentItemId = this.state.tasks.findIndex(task => task.id === id);

            const newArr = copyArr(this.state.tasks);
            newArr.splice(currentItemId, 1);

            console.log(id)

            return this.setState({tasks: newArr});
        }

        return (
            <>
                <div className="row-cols-lg-5 mb-4 d-flex align-items-stretch gap-4 flex-wrap">
                    {this.state.tasks.length > 0 && this.state.tasks.reverse().map((task) => {
                        const {id, title, description, isTaskFinished} = task;

                        return (
                            <div data-todo-item-id={id} className={`card col relative border ${isTaskFinished ? 'border-success' : 'border-danger'}`} key={id}>
                                <div className='card-body d-flex flex-column justify-content-between'>
                                    <h5 className="card-title fw-bold fs-4">{title} | #{id}</h5>
                                    <hr/>
                                    <p className="card-text fs-5">{description}</p>
                                    <span role="button"
                                          className="position-absolute top-0 start-100 translate-middle fs-5"
                                          onClick={onChangeStatusHandler}>
                                        {isTaskFinished ? '✅' : '❌'}
                                    </span>
                                    <button onClick={onDeleteItemHandler} type="button" className="btn btn-outline-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <hr/>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-floating mb-3">
                        <input required data-todo-title='' type="text" className="form-control" id="floatingInput"
                               placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Title for your task (required field)</label>
                    </div>
                    <div className="form-floating">
                        <textarea data-todo-description='' className="form-control" placeholder="Leave a comment here"
                                  id="floatingTextarea2"
                                  style={{height: '100px'}}></textarea>
                        <label htmlFor="floatingTextarea2">Description for your Task (optional)</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Create task</button>
                </form>
            </>
        )
    }
}


