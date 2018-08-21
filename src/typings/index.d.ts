declare namespace IndexStore {
  export interface NavMenu {
    [index: number]: object
  }

  export interface State {
    navMenu: NavMenu
  }
  
}