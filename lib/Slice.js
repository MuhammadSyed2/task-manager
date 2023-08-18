import {createSlice} from '@reduxjs/toolkit';
let name = 'ZXCV'
let initialState = {time:'25:00', currentTask:'', members:[{Name:'Muhammad', Number:8035014}, {Name:'Ahmad', Number:9011418}], tasks:[{Name:'ASDF'}, {Name:'GHJK'}, {Name:'QWER'}]}
let reducers = ({
    startTask(state, action){state.currentTask = action.payload.task},
    pauseTask(state, action){
        state.currentTask.Status = 'Paused'
        state.currentTask.Time_Elapsed += action.payload.time
        fetch('./api/data?t=taks&a=update&time='+state.currentTask.Time_Elapsed+'&c='+state.currentTask.ID)
    },
    setCurrentTask(state, action){ 
        state.currentTask = action.payload;
        state.time = state.currentTask.Duration + ':00'
    },
    setColor(state, action){state.color = action.payload},
    addMember(states, action){states.members = [...states.members, action.payload]},
    addTask(states, action){states.tasks = [...states.tasks, action.payload]},
    removeTask(states, action){states.tasks = states.tasks.filter(task => task.Name != action.payload.Name)},
    editTask(states, action){
        states.tasks = states.tasks.map(task => {
            if(task.Name == action.payload.task.Name ){
                task.Name = task.Name + ' - ' + action.payload.name 
            }
            return task
        })
    },
})
export function anotherMethod(){}

const Slice = createSlice({
    name,
    initialState,
    reducers
})
// const Slice = createSlice({ name, initialState:states, reducers })
export default Slice.reducer
export let { setCurrentTask, getCurrentTask, setColor, addMember, addTask, removeTask, editTask } = Slice.actions //{...Slice.actions}
// export let actions = {...Slice.actions}