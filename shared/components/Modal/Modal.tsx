import { FC, MutableRefObject, ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import { Colors } from "constants/Colors";
import { Caption_2, Subtitle } from "shared/ui/Typography";

type ModalProps = {
  modalRef: MutableRefObject<Modalize>;
  content?: ReactNode;
  headerTitle?: string;
  headerSubtitle?: string;
  headerShown?: boolean;
};

export const Modal: FC<ModalProps> = ({
  modalRef,
  content,
  headerSubtitle,
  headerTitle,
  headerShown = true,
}) => {
  return (
    <Portal>
      <Modalize
        ref={modalRef}
        handlePosition="inside"
        modalStyle={s.modalStyle}
        overlayStyle={s.overlayStyle}
        handleStyle={s.handleShape}
        modalHeight={664}
        HeaderComponent={
          headerShown && (
            <View style={s.headerWrap}>
              {headerTitle && <Subtitle>{headerTitle}</Subtitle>}
              {headerSubtitle && (
                <Caption_2 style={s.headerSubtitle}>{headerSubtitle}</Caption_2>
              )}
            </View>
          )
        }
      >
        {content && content}
      </Modalize>
    </Portal>
  );
};

const s = StyleSheet.create({
  modalStyle: {
    zIndex: 5,
    marginTop: "auto",
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,

    marginHorizontal: 8,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  overlayStyle: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: Colors.Main.White_gray,
  },
  handleShape: {
    alignSelf: "center",
    top: 8,
    width: 62,
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.Main.White_gray,
  },
  headerWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 29,
    paddingBottom: 20,
  },
  headerSubtitle: {
    color: Colors.Main.Gray_1,
    marginTop: 4,
  },
});
