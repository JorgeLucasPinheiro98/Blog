import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  createdAt: string;
  postHeading: 'h1' | 'h2';
  postLink: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  createdAt,
  postHeading,
  postLink,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-3">
      <time
        className="text-slate-600 text-sm/text-2xl/tight"
        dateTime={createdAt}
        title={formatRelativeDate(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
