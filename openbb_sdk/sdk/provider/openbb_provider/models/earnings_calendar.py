"""Earnings calendar data model."""


from datetime import date as dateType
from typing import Optional

from openbb_provider.abstract.data import Data, QueryParams
from openbb_provider.models.base import BaseSymbol
from openbb_provider.metadata import QUERY_DESCRIPTIONS, DATA_DESCRIPTIONS

from pydantic import Field, NonNegativeFloat


class EarningsCalendarQueryParams(QueryParams, BaseSymbol):
    """Earnings calendar rating Query."""

    limit: Optional[int] = Field(
        default=50, description=QUERY_DESCRIPTIONS.get("limit", "")
    )


class EarningsCalendarData(Data, BaseSymbol):
    """Earnings calendar Data."""

    date: dateType = Field(description=DATA_DESCRIPTIONS.get("date", ""))
    eps: Optional[NonNegativeFloat] = Field(
        description="The EPS of the earnings calendar."
    )
    eps_estimated: Optional[NonNegativeFloat] = Field(
        description="The estimated EPS of the earnings calendar."
    )
    time: str = Field(description="The time of the earnings calendar.")
    revenue: Optional[int] = Field(description="The revenue of the earnings calendar.")
    revenue_estimated: Optional[int] = Field(
        description="The estimated revenue of the earnings calendar."
    )
    updated_from_date: Optional[dateType] = Field(
        description="The updated from date of the earnings calendar."
    )
    fiscal_date_ending: dateType = Field(
        description="The fiscal date ending of the earnings calendar."
    )
