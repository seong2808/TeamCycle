export default function Category() {
  return (
    <div className="Category">

      <h2>카테고리 선택</h2>

      <div className="Cate_all">
        <button>전체</button>
      </div>

      <div className="Cate_bnt1">
      <button>자전거도로</button>
      </div>
      <div className="Cate_bnt2">
      <button >정비소</button>
      </div>
      <div className="Cate_bnt3">
      <button>대여소</button>
      </div>

      <div className="Cate_choice">
      <button>선택완료</button>
      </div>

    </div>
  );
}