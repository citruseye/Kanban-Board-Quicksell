import backlog from "../Assets/icons_FEtask/Backlog.svg";
import todo from "../Assets/icons_FEtask/To-do.svg";
import cancelled from "../Assets/icons_FEtask/Cancelled.svg";
import inprogress from "../Assets/icons_FEtask/in-progress.svg";
import done from "../Assets/icons_FEtask/Done.svg";
import low from "../Assets/icons_FEtask/Img - Low Priority.svg";
import medium from "../Assets/icons_FEtask/Img - Medium Priority.svg";
import high from "../Assets/icons_FEtask/Img - High Priority.svg";
import noprior from "../Assets/icons_FEtask/No-priority.svg";
import urgent from "../Assets/icons_FEtask/SVG - Urgent Priority grey.svg";
import urgentcolor from "../Assets/icons_FEtask/SVG - Urgent Priority colour.svg";

const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const priorities = [
    { title: "no priority", icon: <img src={noprior} alt="no priority" /> },
    { title: "low", icon: <img src={low} alt="low" /> },
    { title: "medium", icon: <img src={medium} alt="medium" /> },
    { title: "high",  icon: <img src={high} alt="high" /> },
    { title: "urgent", icon: <img src={urgentcolor} alt="urgentcolor" /> }
];
export const priority = [
    { title: "no priority", icon: <img src={noprior} alt="no priority" /> },
    { title: "low", icon: <img src={low} alt="low" /> },
    { title: "medium", icon: <img src={medium} alt="medium" /> },
    { title: "high",  icon: <img src={high} alt="high" /> },
    { title: "urgent", icon: <img src={urgent} alt="urgent" /> }
];
export const status = [
    { title: "backlog", icon: <img src={backlog} alt="backlog" /> },
    { title: "todo", icon: <img src={todo} alt="todo" /> },
    { title: "in progress", icon: <img src={inprogress} alt="inprogress" /> },
    { title: "done", icon: <img src={done} alt="done" /> },
    { title: "cancelled", icon: <img src={cancelled} alt="cancelled" /> },
];

export const statusIcons = {
    backlog: {
        icon: <img src={backlog} alt="backlog" />,
    },
    todo: {
        icon: <img src={todo} alt="todo" />,
    },
    "in progress": {
        icon: <img src={inprogress} alt="inprogress" />,
    },
    done: {
        icon: <img src={done} alt="done" />,
    },
    cancelled: {
        icon: <img src={cancelled} alt="cancelled" />,
    },
};
export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}
export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};