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
};

export type CatImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: CatBreed[];
};
export type HeaderProps = {
  onCatsLoaded: (cats: CatImage[]) => void;
};
export type HeaderState = {
  loading: boolean;
};
export type CardProps = {
  cat: CatImage;
};
export type CardListProps = {
  cats: CatImage[];
};

export type AppState = {
  cats: CatImage[];
};
export type MainProps = {
  cats: CatImage[];
};
export type ErrorBoundaryProps = {
  children: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
};
