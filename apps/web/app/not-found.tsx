import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-red-500 mb-4">
        404 - ページが見つかりません
      </h2>
      <p className="text-gray-600">
        申し訳ありません。お探しのページは存在しないか、移動または削除された可能性があります。
      </p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ホームページに戻る
      </Link>
    </div>
  );
}
