
const init_links = ["Task 1", "Task 2", "Task 3"]

const links = (state={links: init_links}, action) =>{
    switch (action.type) {
        case 'GET_LINKS':
            return state;
    }
}

export default links