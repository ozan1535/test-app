import {
  handleMainPropertiesChange,
  handleMediaChange,
} from "@/helpers/helpers";
import Input from "../Input/Input";
import InputMedia from "../InputMedia/InputMedia";
import Select from "../Select/Select";
import { IManageProperties } from "./ManageProperties.types";
import { testCategories } from "../Header/headerItems";

export default function ManageProperties({
  formItems,
  setFormItems,
}: IManageProperties) {
  return (
    <>
      <Input
        name="title"
        type="text"
        handleFunction={(e) => handleMainPropertiesChange(e, setFormItems)}
        value={formItems.title}
      />
      <hr />
      <Input
        name="description"
        type="text"
        handleFunction={(e) => handleMainPropertiesChange(e, setFormItems)}
        value={formItems.description}
      />
      <hr />
      <Select
        name="category"
        handleFunction={(e) => handleMainPropertiesChange(e, setFormItems)}
        value={formItems.category}
        options={testCategories}
        optionKey="name"
        isDisabled={false}
      />
      <hr />
      <InputMedia
        media={formItems.mainMedia}
        handleMediaChange={(e) => handleMediaChange(e, "main", setFormItems)}
      />
    </>
  );
}
