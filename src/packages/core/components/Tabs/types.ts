export interface TabItem {
  key: string;
  title: string;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  fullWidth?: boolean;
} 