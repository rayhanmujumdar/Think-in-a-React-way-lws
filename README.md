# ****React Lifting State Up****

## **Date: 8/9/23**

******************Outline:******************

1. There Should be a Single “**Source of Truth”** for any data that changes in a React Application.
2. Rely on ****************Tob-Down Data Flow**************** Instead of syncing the state between different components
3. Lifting state involves writing more “****************boilerplate”**************** code but takes less work to find bugs.
4. We can implement any custom logic to reject to transform user input.
5. If something can be derived from either props or state, it probably shouldn’t be in the state.
6. Trace the bugs to their source easily by just moving to the top.

### Code Example:

**Github link**: - [https://github.com/learnwithsumit/thi...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGpsM2JxSHZzUjd2S25Lb2hyRkNiSjZFeW9qd3xBQ3Jtc0trUnNnWTM3WkZQM2gweEpXUUM4T0JZbHpTTVg0TERibjlCNWV6TE9RUnE0a1d1UVlTX24xNEc1UDIxOEZ0cV9OS09kWjNYdGowZUhCb0ZObWtya0JZd0pqOXBhSmlic1JtMEU3VUh2NjFsUmZ1RzQ3WQ&q=https%3A%2F%2Fgithub.com%2Flearnwithsumit%2Fthink-in-a-react-way&v=v7UpjUQJjWY) [ branch - "lesson-11" ]