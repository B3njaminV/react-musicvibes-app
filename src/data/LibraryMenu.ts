import React from "react";
import {FontAwesome} from "@expo/vector-icons";

export default class LibraryMenu {
    iconName: React.ComponentProps<typeof FontAwesome>['name']
    title: string;
    direction: string;

    constructor(iconName: React.ComponentProps<typeof FontAwesome>['name'], title: string, direction: string) {
        this.iconName = iconName;
        this.title = title;
        this.direction = direction;
    }
}
