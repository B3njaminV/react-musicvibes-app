import React from "react";
import {FontAwesome} from "@expo/vector-icons";

export default class LibraryMenu {
    iconName: React.ComponentProps<typeof FontAwesome>['name']
    title: String;

    constructor(iconName: React.ComponentProps<typeof FontAwesome>['name'], title: String) {
        this.iconName = iconName;
        this.title = title;
    }
}
