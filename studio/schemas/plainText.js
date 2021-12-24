import { v4 as uuidv4 } from "uuid";

export default {
    name: 'plainText',
    title: 'Plain Text',
    type: 'document',
    initialValue: () => ({
      uuid: uuidv4()
    }),
    fields: [
      {
        name: 'uuid',
        title: 'UUID',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: "text",
        title: "Text",
        type: "text"
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "uuid"
        }
      }
    ],
  }