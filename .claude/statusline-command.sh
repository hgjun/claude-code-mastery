#!/bin/bash

# JSON 입력 읽기
input=$(cat)

# 모델명
model_name=$(echo "$input" | jq -r '.model.display_name // "unknown"')

# 컨텍스트 사용량
used_pct=$(echo "$input" | jq -r '.context_window.used_percentage // 0')

# 비용
total_cost=$(echo "$input" | jq -r '.cost.total_cost // 0')

# 하단 상태줄에 표시할 정보
printf "🤖 %s\n📊 context: %.0f%%\n💵 \$%.4f" "$model_name" "$used_pct" "$total_cost"
