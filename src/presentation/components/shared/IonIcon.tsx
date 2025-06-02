import Icon from "@react-native-vector-icons/ionicons"
import React from "react";

type IconName = React.ComponentProps<typeof Icon>["name"];

interface Props {
  name: IconName;
  size?: number;
  color?: string;
}

export const IonIcon = ({name ,size = 30, color = "black"}:Props) => {
  return (
    <Icon name={name} size={size} color={color}/>
  )
}
