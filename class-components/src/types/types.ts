import type { ButtonHTMLAttributes, ErrorInfo, ReactNode } from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type InputProps = {
  className?: string;
  error?: boolean;
  label?: string;
  errorMessage?: string;
  search?: boolean;
  onSearch?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type InputState = {
  value: string;
};

export type CatBreed = {
  id: string;
  name: string;
  description: string;
  child_friendly?: number;
  dog_friendly?: number;
  energy_level?: number;
  intelligence?: number;
};

export type CatImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: CatBreed[];
};
export type HeaderProps = {
  isLoading?: boolean;
  onSearchQueryChange: (query: string) => void;
};
export type HeaderState = {
  loading: boolean;
};
export type CardProps = {
  cat: CatImage;
  isExpanded?: boolean;
  onClick?: () => void;
};
export type CardDetailsProps = {
  cat: CatImage;
  onClose: () => void;
};
export type CardListProps = {
  cats: CatImage[];
};

export type AppState = {
  cats: CatImage[];
  currentPage: number;
  totalPages: number;
};
export type MainProps = {
  cats: CatImage[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
export type ErrorBoundaryProps = {
  children: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
};
export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
