import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h1 className="text-4xl font-bold mb-4" {...props} />
    ),
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h2
        className="text-3xl font-semibold mb-3 mt-6 border-b pb-1 border-gray-300"
        {...props}
      />
    ),
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h3 className="text-2xl font-medium mb-2 mt-5" {...props} />
    ),
    p: (props: React.HTMLProps<HTMLParagraphElement>) => (
      <p className="text-lg leading-relaxed mb-4 text-gray-300" {...props} />
    ),
    ul: (props: React.HTMLProps<HTMLUListElement>) => (
      <ul className="list-disc list-inside pl-5 mb-4" {...props} />
    ),
    ol: (props: React.HTMLProps<HTMLOListElement>) => (
      <ol className="list-decimal list-inside pl-5 mb-4" {...props} />
    ),
    li: (props: React.HTMLProps<HTMLLIElement>) => (
      <li className="mb-1 text-gray-300" {...props} />
    ),
    a: (props: React.HTMLProps<HTMLAnchorElement>) => (
      <a
        className="text-purple-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
      <blockquote
        className="border-l-4 pl-4 italic text-gray-500 mb-4 border-gray-300"
        {...props}
      />
    ),
    code: (props: React.HTMLProps<HTMLElement>) => (
      <code
        className="bg-zinc-800 text-sm font-mono px-2 py-1 rounded"
        {...props}
      />
    ),
    pre: (props: React.HTMLProps<HTMLPreElement>) => (
      <pre
        className="bg-gray-900 text-gray-100 p-4 rounded mb-4 overflow-auto"
        {...props}
      />
    ),
    // img: (props: React.HTMLProps<HTMLImageElement>) => (
    //   <img
    //     className="rounded-md shadow-lg mx-auto"
    //     alt={props.alt}
    //     {...props}
    //   />
    // ),
    ...components,
  };
}
