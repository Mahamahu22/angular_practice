export interface ConfirmLeave {
  canDeactivate: () => boolean | Promise<boolean>;
}
