import { generatePageTitle } from "@/utils/utils";
import { getPageMeta } from "@/utils/seo";
import { renderSEOTags } from "@/utils/seo-tags";
import { PointSystemPage } from "@orderly.network/trading-points";
import { getSymbol } from "@/utils/storage";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RouteOption } from "@orderly.network/types";

export default function PointsIndex() {
  const pageMeta = getPageMeta();
  const pageTitle = generatePageTitle("CZR Points");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onRouteChange = (pathObject: RouteOption) => {
    const path = pathObject.href;
    const searchParamsString = searchParams.toString();
    const queryString = searchParamsString ? `?${searchParamsString}` : "";

    if (!path) {
      return;
    }

    if (pathObject.target === "_blank") {
      window.open(path, "_blank");
      return;
    }

    if (path === "/" || path === "/perp") {
      const symbol = getSymbol();
      navigate(`/perp/${symbol}${queryString}`);
      return;
    }

    navigate(`${path}${queryString}`);
  };

  return (
    <>
      {renderSEOTags(pageMeta, pageTitle)}
      <PointSystemPage onRouteChange={onRouteChange} />
    </>
  );
}
