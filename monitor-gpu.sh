# Monitor GPU usage during LLM inference

# permission: cmhod +x monitor-gpu.sh
# command: ./monitor-gpu.sh

echo "Monitoring GPU during LLM inference..."
echo "Press Ctrl+C to stop"
echo ""

while true; do
    clear
    echo "=== GPU Status $(date) ==="
    nvidia-smi --query-gpu=name,memory.used,memory.total,utilization.gpu,temperature.gpu,power.draw --format=csv,noheader,nounits
    echo ""
    echo "Memory: $(nvidia-smi --query-gpu=memory.used --format=csv,noheader,nounits)/$(nvidia-smi --query-gpu=memory.total --format=csv,noheader,nounits) MB"
    echo "Usage: $(nvidia-smi --query-gpu=utilization.gpu --format=csv,noheader,nounits)%"
    echo "Temp: $(nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader,nounits)°C"
    echo "Power: $(nvidia-smi --query-gpu=power.draw --format=csv,noheader,nounits)W"
    sleep 2
done