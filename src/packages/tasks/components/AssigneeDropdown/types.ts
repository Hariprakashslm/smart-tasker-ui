export interface Assignee {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface AssigneeDropdownProps {
  assignees: Assignee[]; // list of all available users
  selectedId: string | null;
  onSelect: (id: string) => void;
  disabled?: boolean;
}
