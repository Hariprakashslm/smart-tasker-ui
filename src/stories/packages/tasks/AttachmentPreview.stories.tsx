import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  AttachmentPreview,
  AttachmentPreviewProps,
} from '@tasks/AttachmentPreview';

const meta: Meta<typeof AttachmentPreview> = {
  title: 'Packages/Tasks/AttachmentPreview',
  component: AttachmentPreview,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AttachmentPreview>;

const mockAttachments = [
  {
    name: 'image1.jpg',
    url: 'https://via.placeholder.com/150',
    type: 'image/jpeg',
  },
  {
    name: 'document1.pdf',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    type: 'application/pdf',
  },
  {
    name: 'image2.png',
    url: 'https://via.placeholder.com/200x100',
    type: 'image/png',
  },
];

export const Default: Story = {
  args: {
    attachments: mockAttachments,
  },
};

export const OnlyImages: Story = {
  args: {
    attachments: mockAttachments.filter((a) => a.type.startsWith('image/')),
  },
};

export const OnlyDocuments: Story = {
  args: {
    attachments: mockAttachments.filter((a) => !a.type.startsWith('image/')),
  },
};

export const Empty: Story = {
  args: {
    attachments: [],
  },
};
