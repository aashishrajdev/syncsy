import {
  pgTable,
  text,
  uuid,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const files = pgTable("files", {
  id: uuid("id").primaryKey().defaultRandom(),

  //baisc file/folder info
  name: text("name").notNull(),
  path: text("path").notNull(), // /documents/folder1/folder2/file.pdf
  size: integer("size").notNull(),
  type: text("type").notNull(), // "folder"
  //storage information
  fileUrl: text("file_url").notNull(), //url to access the file
  thumbnailUrl: text("thumbnail_url"), //url to access the thumbnail

  // ownership
  userId: uuid("user_id").notNull(),
  parentId: uuid("parent_id"), //id of the parent folder null for root

  //file/folder flags
  isFolder: boolean("is_folder").notNull().default(false),
  isStarred: boolean("is_starred").notNull().default(false),
  isTrash: boolean("is_trash").notNull().default(false),

  //Timestamps
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
