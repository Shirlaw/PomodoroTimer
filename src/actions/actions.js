const DELETE_ITEM = "delete_item";

export function deleteItem(id) {
  return { type: DELETE_ITEM, id };
}
