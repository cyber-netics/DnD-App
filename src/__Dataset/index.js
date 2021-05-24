import image1 from "assets/imgs/img-13.jpg";
import avatar1 from "assets/avatars/thumb-1.jpg";
import avatar2 from "assets/avatars/thumb-2.jpg";
import avatar3 from "assets/avatars/thumb-3.jpg";
import avatar4 from "assets/avatars/thumb-4.jpg";

export const boards = [
  {
    title: "Backlog",
    id: "board-id-1",
    tasks: [{ id: "card-id-1" }, { id: "task-id-23" }, { id: "task-id-22" }],
  },
  { title: "In Process", id: "board-id-2", tasks: [{ id: "card-id-2" }] },
  { title: "Done", id: "board-id-3", tasks: [{ id: "card-id-3" }] },
  { title: "Archive", id: "board-id-4", tasks: [{ id: "card-id-4" }] },
];

export const tasks = {
  "task-id-23": { id: "task-id-23", title: "create unit test" },
  "card-id-2": { id: "task-id-2", title: "change color" },

  "task-id-22": {
    id: "task-id-22",
    title: "modify content",
    Assignees: [
      { name: "Arnold Shwartneger", image: avatar2 },
      { name: "Jessica Alba", image: avatar3 },
    ],
  },

  "card-id-1": {
    id: "task-id-1",
    title: "set backgound",
    attachments: [{ image: image1 }],
    Assignees: [
      { name: "Jank vandam", image: avatar1 },
      { name: "Arnold Shwartneger", image: avatar2 },
      { name: "Jessica Alba", image: avatar3 },
      { name: "Jessica Alba", image: avatar4 },
    ],
  },

  "card-id-3": {
    id: "task-id-3",
    title: "update SEO",
    Assignees: [{ name: "Jessica Alba", image: avatar3 }],
  },

  "card-id-4": {
    id: "task-id-4",
    title: "component cleanup",
    attachments: [{ image: image1 }],
  },
};
