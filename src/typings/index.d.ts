declare namespace IndexStore {
  
  export interface State {
    navMenu: navMenu
  }

  export interface navMenu {
    code: number,
    message?: string,
    data: []
  }
}