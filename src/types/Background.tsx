import { Action } from '.';

export type BackgroundProps = {
  onRef: (ref: HTMLDivElement) => void;
  reset: (props?: any) => void;
  switchAction: (action: Action) => void;
};
export type NodeHolderProps = {
  pan: {
    x: number;
    y: number;
  };
}