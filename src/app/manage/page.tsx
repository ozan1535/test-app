"use client";
import { useState } from "react";
import Button from "@/components/Button/Button";
import {
  addItemTabs,
  formItemsInitialProperties,
  tabIndexStoreInitialProperties,
  updateTabIndex,
} from "@/helpers/helpers";
import Tab from "@/components/Tab/Tab";
import { IFormItems, ITabIndexStore } from "../types";
import { useAppContext } from "../context";
import Input from "@/components/Input/Input";
import AddTest from "@/components/AddTest/AddTest";
import AddBlog from "@/components/AddBlog/AddBlog";

export default function Manage() {
  const { setModalProps } = useAppContext();
  const [formItems, setFormItems] = useState<IFormItems>(
    formItemsInitialProperties
  );

  const [passwordProperties, setPasswordProperties] = useState({
    password: "sample",
    isPasswordTrue: false,
  });

  const [tabIndexStore, setTabIndexStore] = useState<ITabIndexStore>(
    tabIndexStoreInitialProperties
  );

  if (!passwordProperties.isPasswordTrue) {
    return (
      <>
        <Input
          name="Password"
          type="password"
          value={passwordProperties.password}
          handleFunction={(e) =>
            setPasswordProperties((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
        <Button
          type="button"
          isButtonSecondary={false}
          name="Enter"
          handleFunction={() => {
            if (
              passwordProperties.password ===
              process.env.NEXT_PUBLIC_MANAGE_PAGE_PASSWORD
            ) {
              setPasswordProperties((prev) => ({
                ...prev,
                isPasswordTrue: true,
              }));
            }
          }}
        />
      </>
    );
  }

  return (
    <>
      <Tab
        items={addItemTabs}
        handleFunction={updateTabIndex}
        currentIndex={tabIndexStore.addItemTabIndex || 0}
        itemName="addItemTabIndex"
        setTabIndexStore={setTabIndexStore}
      />
      {tabIndexStore.addItemTabIndex === 0 ? (
        <AddTest
          tabIndexStore={tabIndexStore}
          setTabIndexStore={setTabIndexStore}
          formItems={formItems}
          setFormItems={setFormItems}
          setModalProps={setModalProps}
        />
      ) : (
        <AddBlog setTabIndexStore={setTabIndexStore} />
      )}
    </>
  );
}
