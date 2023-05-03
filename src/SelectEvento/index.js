import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import CustomizedDialogs from "../Components/ModalVazia";

export default function InsetDividers(props) {
  return (
    <>
      <CustomizedDialogs />
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {Array.isArray(props.eventosArray) &&
          props.eventosArray.map((item) => (
            <>
              <ListItem onClick={() => console.log(item)}>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.descricao}
                  secondary={item.detalhes}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}

        <>
          <ListItem onClick={() => props.sortearEventos()}>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Continuarsss"
              secondary="Não há nada para fazer hoje"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      </List>
    </>
  );
}
