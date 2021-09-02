export const customStyles = {
  control: (base, state) => ({
    ...base,
    height: 60,
    background: "#ffffff",
    // match with the menu
    borderRadius: state.isFocused ? "0px 0px 0 0" : 3,
    // Overwrittes the different states of border
    // borderColor: state.isFocused ? "y" : "green",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "" : "",
    },
  }),
  menu: (base) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
  }),
};
